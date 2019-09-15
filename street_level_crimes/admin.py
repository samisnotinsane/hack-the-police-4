from django.contrib import admin

from .models import StreetCrime, CluesIncident, CrimeCategories


# Register your models here.
admin.site.register(StreetCrime)
admin.site.register(CrimeCategories)
admin.site.register(CluesIncident)

