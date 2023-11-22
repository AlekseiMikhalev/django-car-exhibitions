from django.urls import path

from . import views

urlpatterns = [
    path('api/exhibitions/', views.all_exhibitions, name='all_exhibitions'),
    path('api/exhibition/<str:title>/',
         views.exhibition_detail, name='exhibition_detail'),
    path('api/exhibition/<str:title>/cars/',
         views.cars_in_exhibition, name='cars_in_exhibition'),
]
