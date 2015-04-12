# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0005_auto_20150411_1818'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='url',
            field=models.CharField(default=datetime.datetime(2015, 4, 12, 7, 18, 44, 199547, tzinfo=utc), max_length=100, verbose_name='文章URL地址'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='articlecategory',
            name='url',
            field=models.CharField(max_length=100, verbose_name='文章类型URL地址'),
        ),
    ]
