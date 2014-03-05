# Create your views here.
from django.http import HttpResponse
from models import Book

def unpublished(request):
    unpublishedBooks = Book.objects.filter(isPublished = False)
    for book in unpublishedBooks :
        print(unpublishedBooks[1].picture.__str__())
    return HttpResponse("unPublished Books are on 'unpublishedBooks' array.")

def booksByFirstCharachter(request):
    if request.method == 'GET' :
        firstChar = request.GET['first']
    return HttpResponse(firstChar)