from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .serializers import *
from rest_framework import viewsets
from django.http import HttpResponse
from .serializers import BookSerializer
from .models import Book
# Create your views here.
class AllUserList(generics.ListCreateAPIView):
    queryset = AllUser.objects.all()
    serializer_class = AllUserSerializer
    name = 'all-User'
    filter_fields = (
      'email',
      )
    search_fields = (
      'email',
      )
    ordering_fields = (
      'email',
      )
class AllUserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = AllUser.objects.all()
    print(queryset)
    serializer_class = AllUserSerializer
    name = 'alluser-detail'
    filter_fields = (
      'email',
      )
    search_fields = (
      'email',
      )
    ordering_fields = (
      'email',
      )
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(instance)
        print(serializer.data)
        return Response(serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status= status.HTTP_204_NO_CONTENT)
class EachTaskList(generics.ListCreateAPIView):
    queryset = EachTask.objects.all()
    serializer_class = EachTaskSerializers
    name = 'each-task'
    filter_fields = (
      'EachUser',
      'submit_date',
      )
    search_fields = (
      'email',
      )

class EachTaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = EachTask.objects.all()
    serializer_class = EachTaskSerializers
    name = 'eachtask-detail'
    filter_fields = (
      'EachUser',
      'submit_date',
      )
    search_fields = (
      'EachUser',
      'submit_date',
      )
    ordering_fields = (
      'Start_date',
    )
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(instance)
        print(serializer.data)
        return Response(serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status= status.HTTP_204_NO_CONTENT)
class ProfileDetail(generics.ListCreateAPIView):
  queryset = profile.objects.all()
  serializer_class = ProfileSerializers
  name = 'profile-detail'
class ProfileList(generics.RetrieveUpdateDestroyAPIView):
  queryset = profile.objects.all()
  serializer_class = ProfileSerializers
  name = 'profile-detail'

  def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(instance)
        print(serializer.data)
        return Response(serializer.data)
  def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status= status.HTTP_204_NO_CONTENT)

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def post(self, request, *args, **kwargs):
        cover = request.data['cover']
        name = request.data['name']
        Book.objects.create(name=name, cover=cover)
        return HttpResponse({'message': 'Download created'}, status=200)
class ApiRoot(generics.GenericAPIView):
  name = 'api-root'
  def get(self,request,*args,**kwargs):
    return Response({
            'all-user':reverse(AllUserList.name,request=request),
            'each-task':reverse(EachTaskList.name,request=request),
            'profile-detail':reverse(ProfileDetail.name,request=request),
            })
           