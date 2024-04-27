from django.shortcuts import render
# from django.http import HttpResponse 
from firstapp.models import Topic,Webpage,AcessRecord
# Create your views here.
def index(request):
    # return HttpResponse("hello world")
    webpage_list=AcessRecord.objects.order_by('date')
    date_dict={'access_records':webpage_list}
    return render(request, "firstapp/index.html",context=date_dict)
    
