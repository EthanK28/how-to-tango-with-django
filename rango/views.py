from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def index(request):
    context_dict = {'boldmessage' : " Iam bold font from the context "}

    return render(request, 'rango/index.html', context_dict)
