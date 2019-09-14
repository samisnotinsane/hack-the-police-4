from django.db import models

class CrimeCategories(models.Model):
    url = models.CharField(max_length=200)
    name = models.CharField(max_length=200)

class Location(models.Model):
    latitude = models.CharField(max_length=200)
    longitute = models.CharField(max_length=200)
    street = models.CharField(max_length=200)
    street_id = models.CharField(max_length=200)
    name = models.CharField(max_length=200)

class StreetCrime(models.Model):
    crime_id = models.CharField(max_length=200)
    category = models.ForeignKey(CrimeCategories, on_delete=models.CASCADE)
    persistent_id = models.CharField(max_length=200)
    month = models.CharField(max_length=200)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    context = models.CharField(max_length=200)
    location_type = models.CharField(max_length=200)
    location_subtype = models.CharField(max_length=200)
    outcome_status = models.CharField(max_length=200)
    outcome_category = models.CharField(max_length=200)
    outcome_date = models.CharField(max_length=200)
