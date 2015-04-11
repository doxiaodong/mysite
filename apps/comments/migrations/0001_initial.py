# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0004_delete_reply'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('content', models.TextField(verbose_name='内容')),
                ('reply_time', models.DateTimeField(verbose_name='回复时间')),
                ('reply_user', models.CharField(verbose_name='用户', max_length=20)),
                ('reply_object', models.CharField(null=True, blank=True, max_length=20, verbose_name='回复对象')),
                ('article', models.ForeignKey(to='article.Article')),
            ],
        ),
    ]
