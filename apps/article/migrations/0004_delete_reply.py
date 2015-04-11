# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0003_reply'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Reply',
        ),
    ]
