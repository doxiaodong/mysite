from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Profile(models.Model):

    user = models.OneToOneField(User)
    sex = models.IntegerField('性别')
    pic = models.ImageField('头像', upload_to='user/')

    def __str__(self):
        return self.user.username

    class Meta:
        db_table = 'account_profile'