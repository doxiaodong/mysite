# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('comments', '0002_auto_20150411_1637'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='reply_object',
            field=models.ForeignKey(related_name='reply_object', null=True, to=settings.AUTH_USER_MODEL, blank=True),
        ),
    ]
