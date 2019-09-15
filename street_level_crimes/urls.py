from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),    
    path('forms', views.form, name='forms'),
    path('forms2', views.form2, name='forms2'),
    path('forms3', views.form3, name='forms3'),
    path('forms4.json', views.form4, name='forms4.json'),
]
