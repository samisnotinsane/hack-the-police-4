from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('police-form', views.police_form, name='police_form'),
    path('crime-map', views.crime_map, name='crime_map'),
    path('forms', views.form, name='forms'),
    path('forms2', views.form2, name='forms2'),
    path('forms3', views.form3, name='forms3'),
    path('forms4.json', views.form4, name='forms4.json'),
]
