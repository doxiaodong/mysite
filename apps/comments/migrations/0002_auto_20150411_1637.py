# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='reply_object',
        ),
        migrations.AlterField(
            model_name='comment',
            name='reply_user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
    ]
