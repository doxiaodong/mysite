from django.contrib import admin
from .profile import *

# Register your models here.


class ProfileAdmin(admin.ModelAdmin):
    fieldsets = [
        ('账户增加', {
            'fields': ['user', 'sex', 'pic'],
        }),
    ]

admin.site.register(Profile, ProfileAdmin)