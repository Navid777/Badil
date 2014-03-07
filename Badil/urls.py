from django.conf.urls import patterns, include, url
from book.views import *
from django.conf.urls.static import static
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
                       # Examples:
                       # url(r'^$', 'Badil.views.home', name='home'),
                       # url(r'^Badil/', include('Badil.foo.urls')),

                       # Uncomment the admin/doc line below to enable admin documentation:
                       # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

                       # Uncomment the next line to enable the admin:
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^unpublished/$', unpublished),
                       url(u'^bookByFirstChar/(?P<first>\w{1})/$', books_by_first_character),
                       url(u'^personByFirstChar/(?P<first>\w{1})/$', published_persons_by_first_character),
                       url(r'^bookBySubject/(?P<id>\d{1})/$', books_by_subject),
                       url(r'^unpublishedBySubject/(?P<id>\d{1})/$', unpublished_books_by_subject),
)


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)