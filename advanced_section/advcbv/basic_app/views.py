from django.shortcuts import render
from django.views.generic import View,TemplateView

# Create your views here.
class CBView(View):
    def get(self,request):
        return HttpResponse("CLASS BASED VIEWS ARE COOL!")