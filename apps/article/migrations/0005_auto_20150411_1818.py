# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0004_delete_reply'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='pic',
            field=models.ImageField(null=True, blank=True, upload_to='article/', verbose_name='图片'),
        ),
    ]
