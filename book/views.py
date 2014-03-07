# Create your views here.
from django.http import HttpResponse
from book.models import Person
from models import Book
from django.db.models import Q


def unpublished(request):
    unpublished_books = Book.objects.filter(isPublished=False)
    for book in unpublished_books:
        print(unpublished_books[1].picture.__str__())
    return HttpResponse("unPublished Books are on 'unpublishedBooks' array.")


def books_by_first_character(request, first):
    search_results = Book.objects.filter(title__startswith=first)
    return HttpResponse(search_results[0].title)


def published_persons_by_first_character(request, first):
    author_results = Person.objects.filter(Q(authors__isnull=False),
                                           Q(firstName__startswith=first) |
                                           Q(lastName__startswith=first)).distinct()
    translator_results = Person.objects.filter(Q(translators__isnull=False),
                                               Q(firstName__startswith=first) |
                                               Q(lastName__startswith=first)).distinct()
    return HttpResponse(author_results[0].firstName)


def books_by_subject(request, id):
    book_results = Book.objects.filter(isPublished=True, subjects__id=id)
    return HttpResponse(book_results[0].title)


def unpublished_books_by_subject(request, id):
    book_results = Book.objects.filter(isPublished=False, subjects__id=id)
    return HttpResponse(book_results[0].title)