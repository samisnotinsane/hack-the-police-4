from django.contrib import admin

from .models import StreetCrime, CluesIncident


# Register your models here.
admin.site.register(StreetCrime)

admin.site.register(CluesIncident)