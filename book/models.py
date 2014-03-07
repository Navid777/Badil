from django.db import models
from django.conf import settings

# Create your models here.


class Person(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    nationalCode = models.IntegerField(blank=True, null=True)

    def __unicode__(self):
        return self.firstName + ' ' + self.lastName


class Subject(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100)

    def __unicode__(self):
        return self.title


class Book(models.Model):
    title = models.CharField(max_length=100)
    ISBN = models.IntegerField()
    authors = models.ManyToManyField(Person, related_name="authors", null=True, blank=True)
    translators = models.ManyToManyField(Person, related_name="translators", null=True, blank=True)
    subjects = models.ManyToManyField(Subject)
    pubDate = models.DateField(null=True, blank=True)
    description = models.CharField(max_length=1000)
    miniDescription = models.CharField(max_length=300)
    isPublished = models.BooleanField()
    printNo = models.IntegerField()
    picture = models.FileField(upload_to=settings.MEDIA_URL, null=True, blank=True)

    def __unicode__(self):
        return self.title


class News(models.Model):
    title = models.CharField(max_length=200)
    miniDescription = models.CharField(max_length=300)
    description = models.CharField(max_length=1000)
    picture = models.FileField(upload_to=settings.MEDIA_ROOT, null=True, blank=True)

    def __unicode__(self):
        return self.title
