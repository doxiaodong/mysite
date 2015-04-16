# from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class Profile(AbstractUser):

    # user = models.ForeignKey(settings.AUTH_USER_MODEL)
    sex = models.IntegerField('性别', default=0)
    pic = models.ImageField('头像', upload_to='user/', null=True, blank=True)

    class Meta:
        db_table = 'account_profile'