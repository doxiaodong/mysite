# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0004_auto_20150412_0304'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='url',
            field=models.CharField(verbose_name='评论楼层URL地址，最好用日期', default='20150412125624', max_length=100),
            preserve_default=False,
        ),
    ]
