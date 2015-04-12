from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.contrib import admin
from . import settings


urlpatterns = patterns(
    '',
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'', include('apps.home.urls', namespace="home")),
    url(r'^article/', include('apps.article.urls', namespace="article")),
    url(r'^learn/', include('apps.learn.urls', namespace="learn")),
    url(r'^account/', include('apps.account.urls', namespace="account")),
    url(r'^comments/', include('apps.comments.urls', namespace="comments")),


) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
