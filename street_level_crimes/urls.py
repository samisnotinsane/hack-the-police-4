from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('police-form', views.police_form, name='police_form'),
    path('crime-map', views.crime_map, name='crime_map'),
]
