from django.urls import path
from .views import LatestProductList, ProductDetail

urlpatterns = [
    path("latest-products/", LatestProductList.as_view()),
    path("products/<slug:category_slug>/<slug:product_slug>/", ProductDetail.as_view())
]