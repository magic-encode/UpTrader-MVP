from django.urls import path

from .views import home_view, product_detail_view, commentRemove



urlpatterns = [
    path('', home_view, name='home_page'),
    path('product_detail/<str:pk>/', product_detail_view, name='product_detail'),
    path('delete_comment/<str:pk>/', commentRemove, name='delete_comment'),
]




