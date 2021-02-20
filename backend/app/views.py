# -*- coding: utf-8 -*-
from django.http import HttpResponse

def health(request):
    return HttpResponse("Healthy")
