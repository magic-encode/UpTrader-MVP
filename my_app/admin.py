from django.contrib import admin
from .models import Category, Comment, Product
# Register your models here.


admin.site.register([Category, Comment, Product])