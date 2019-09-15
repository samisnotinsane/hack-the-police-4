from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

import requests
from . import services

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
