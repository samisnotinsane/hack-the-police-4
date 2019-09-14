from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

import requests

def index(request):
    response = requests.get('https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-01')
    crimedata = response.json()
    return render(request, 'street_level_crimes/index.html', {
        'crimedata': crimedata
    })
