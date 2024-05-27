from basic_app import views 
from django.urls import path



app_name = "basic_app"
urlpatterns = [
    
    path("",views.SchoolListView.as_view(),name='list'),
    path("<int:pk>/",views.SchoolDetailView.as_view(),name='detail'),
    path("update/<int:pk>/",views.SchoolUpdateView.as_view(),name='update'),
    path("delete/<int:pk>/",views.SchoolDeleteView.as_view(),name='delete'),
    # path("<int:school_id>/student_list/",views.StudentListView.as_view(),name='student_list'),/",views.SchoolDetailView.as_view(),name='detail'),
    path("create/",views.SchoolCreateView.as_view(),name='create'),
]
