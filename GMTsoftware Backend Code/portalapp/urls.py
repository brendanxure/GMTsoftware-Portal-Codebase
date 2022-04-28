from django.urls import path
from portalapp import views

urlpatterns = [
    path('Users/', views.AllUserList.as_view(), name=views.AllUserList.name),
    path('Users/<int:pk>', views.AllUserDetail.as_view(), name=views.AllUserDetail.name),
    path('EachTask/', views.EachTaskList.as_view(), name=views.EachTaskList.name),
    path('EachTask/<int:pk>/', views.EachTaskDetail.as_view(), name=views.EachTaskDetail.name),
    path('profile/', views.ProfileDetail.as_view(), name=views.ProfileDetail.name),
    path('profile/<int:pk>/', views.ProfileList.as_view(), name=views.ProfileList.name),
    path('',views.ApiRoot.as_view(),name=views.ApiRoot.name),   
    ]