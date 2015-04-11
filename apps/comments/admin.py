from django.contrib import admin
from .models import *


# Register your models here.
class CommentAdmin(admin.ModelAdmin):
    fieldsets = [
        ('文章', {
            'fields': ['article']
        }),
        ('其他信息', {
            'fields': ['content', 'reply_time', 'reply_user', 'reply_object'],
        }),
    ]

    list_display = ('content', 'reply_time', 'article')
    list_filter = ['reply_time']
    search_fields = ['article']

admin.site.register(Comment)