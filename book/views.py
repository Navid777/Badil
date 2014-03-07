# Create your views here.
from django.http import HttpResponse
from book.models import Person
from models import Book
from django.db.models import Q

def unpublished(request):
    unpublishedBooks = Book.objects.filter(isPublished = False)
    for book in unpublishedBooks :
        print(unpublishedBooks[1].picture.__str__())
    return HttpResponse("unPublished Books are on 'unpublishedBooks' array.")

def booksByFirstCharacter(request, first):
    searchResults = Book.objects.filter(title__startswith = first)
    return HttpResponse(searchResults[0].title)

def publishedPersonsByFirstCharacter(request, first):
    authorResults = Person.objects.filter(Q(authors__isnull = False),
                                          Q(firstName__startswith = first) | Q(lastName__startswith = first)).distinct()
    translatorResults = Person.objects.filter(Q(translators__isnull = False),
                                          Q(firstName__startswith = first) | Q(lastName__startswith = first)).distinct()
    return HttpResponse(authorResults[0].firstName)

def booksBySubject(request, id):
    bookResults = Book.objects.filter(isPublished=True,subjects__id = id)
    return HttpResponse(bookResults[0].title)

def unpublishedBooksBySubject(request, id):
    bookResults = Book.objects.filter(isPublished = False, subjects__id = id)
    return HttpResponse(bookResults[0].title)