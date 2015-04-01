from django.conf.urls import patterns, include, url
from apps.learn import views

urlpatterns = [
    url(r'^bands/$', views.band_listing, name='band-list'),
    # url(r'^bands/(\d+)/$', views.band_detail, name='band-detail'),
    # url(r'^bands/search/$', views.band_search, name='band-search'),
    url(r'^(?P<question_id>\d+)/$', views.detail, name='learn_detail'),
    url(r'^(?P<question_id>\d+)/vote/$', views.vote, name='vote'),
    url(r'^index/$', views.index, name='index'),
]