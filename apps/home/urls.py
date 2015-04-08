from django.conf.urls import patterns, include, url
from apps.home import views

urlpatterns = patterns(
    '',
    url(r'^$', views.home, name='home_index'),
)