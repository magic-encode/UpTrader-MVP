from django.shortcuts import render, redirect
from .models import Comment, Product, Category
from django.db.models import Q 
# Create your views here.

def searchProjects(request):

    search_query = ''

    if request.GET.get('search_query'):
        search_query = request.GET.get('search_query')

    category: str = Category.objects.filter(
        title__icontains=search_query
    )

    products = Product.objects.distinct().filter(
        Q(name__icontains=search_query) |
        Q(price__icontains=search_query) |
        Q(category__in=category)
    )

    return products, search_query




def home_view(request):
    products, natija = searchProjects(request)
    cat = None
    categoryID = request.GET.get('category')
    
    if categoryID:
        cat = Product.objects.filter(category=categoryID)
    print(categoryID)
        
    categories = Category.objects.all()
    
    context = {
        "products": products,
        'categories': categories,
        'cat': cat
    }
    return render(request, 'index.html', context)


def product_detail_view(request, pk):
    product = Product.objects.get(id=pk)
    items = product.comment_set.all()
    
    products = product.category.product_set.all()

    if request.POST:
        Comment.objects.create(
            commen=product,
            name=request.POST.get('name'),
            comment=request.POST.get('comment'),
        )
        return redirect('product_detail', pk=product.id)


    context = {
        'items': items,
        'product': product,
        'products': products[0:5],
    }
    
    return render(request, 'product-detail.html', context)


def commentRemove(request, pk):
    product = Product.objects.get(id=pk)
    comment = Comment.objects.get(id=pk)
    comment.delete()

    return redirect('product_detail', pk=product.id)


