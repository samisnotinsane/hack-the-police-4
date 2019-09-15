from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.core import serializers

import requests
from . import services
from .models import CrimeCategories

def index(request):
    # response = requests.get('https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-01')
    # crimedata = response.json()
    crimes_list = services.get_street_crimes(latitude='52.629729', longitude='-1.131592', date='2019-01')
    return render(request, 'street_level_crimes/index.html', {
        'crimes_list': crimes_list
    })

def form(request):
    return render(request, 'street_level_crimes/forms.html', {})

def form2(request):
    return render(request, 'street_level_crimes/forms2.html', {})

def form3(request):
    return render(request, 'street_level_crimes/forms3.html', {})

def form4(request):
    return render(request, 'street_level_crimes/forms4.json', {})

def crime_map(request):
    return render(request, 'street_level_crimes/crime_map.html', {})

def police_form(request):
    all_categories_json = serializers.serialize('json', CrimeCategories.objects.all())
    services.post_json("http://bugs.python.org", all_categories_json)
    print(all_categories_json)
    return render(request, 'street_level_crimes/police_form.html', {})

def new_incident(request):
    return render(request, 'street_level_crimes/new_incident_form.html', {})
