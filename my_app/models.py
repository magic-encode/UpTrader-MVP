from django.db import models
from django.contrib.auth.models import User



class Category(models.Model):
    image = models.ImageField()
    title = models.CharField(max_length=150)

    def __str__(self):
        return self.title
    
    @property
    def imageURL(self):
        """This function for to fix images url"""
        try:
            url = self.image.url
        except:
            url = ""
        return url


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    image = models.ImageField()
    price = models.FloatField()
    price_new = models.FloatField(null=True, blank=True)
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name
    
    @property
    def imageURL(self):
        """This function for to fix images url"""
        try:
            url = self.image.url
        except:
            url = ""
        return url


class Comment(models.Model):
    commen = models.ForeignKey(Product, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=False, blank=False)
    comment = models.TextField(blank=False)
    image = models.ImageField(
        null=True, upload_to='profile', default='default.jpeg')
    published = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    @property
    def imageURL(self):
        """This function for to fix images url"""
        try:
            url = self.image.url
        except:
            url = ""
        return url

