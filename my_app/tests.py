from django.test import TestCase, Client

from .models import Product
from .models import Comment
from .models import Category


class ModelsTestCase(TestCase):
    def setUp(self) -> None:
        self.product_cat = Category.objects.create(
            title="Food",

        )

        self.my_product = Product.objects.create(
            category=self.product_cat,
            image="static/assets/images/product1.png",
            name="Apple",
            price=150,
            description="Hi I am Apple",
        )
        self.comment = Comment.objects.create(
            commen=self.my_product,
            name="Abdulla",
            comment="Hello I am Backend developer",
            image='/media/product4.png'
        )

        self.client = Client()
    
    
    def test_category_instance(self):
        category = Category.objects.get(title="Food")
        self.assertEqual(category.title, "Food")

        
    def test_product_instance(self):
        product = Product.objects.get(name="Apple")
        self.assertEqual(product.name, "Apple")
        self.assertEqual(product.description, "Hi I am Apple")
        self.assertEqual(product.price, 150)
        self.assertEqual(product.category, self.product_cat)
        self.assertEqual(product.image, "static/assets/images/product1.png")
    
    
    def test_comments_instance(self) -> None:
        """Checks comments created in database."""
        comment = Comment.objects.get(name="Abdulla")
        self.assertEqual(comment.commen, self.my_product)
        self.assertEqual(comment.name, "Abdulla")
        self.assertEqual(comment.image, '/media/product4.png')
        self.assertEqual(comment.comment, 'Hello I am Backend developer')

  