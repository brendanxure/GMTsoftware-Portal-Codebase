from rest_framework import serializers
from portalapp.models import *




class AllUserSerializer(serializers.HyperlinkedModelSerializer):
	email_set = serializers.HyperlinkedRelatedField(
		many=True,
		read_only=True,
		view_name='eachtask-detail'
		)	
	class Meta:
		model = AllUser
		fields = [
		'url',
		'pk',
		'email',
		'email_set']

class EachTaskSerializers(serializers.HyperlinkedModelSerializer):
	EachUser = serializers.SlugRelatedField(queryset=AllUser.objects.all(),slug_field='email')
	
	class Meta:
		model = EachTask
		fields = ['url',
        'pk',
		'Task',
		'EachUser',
		'File',
		'phone_nos',
		'start_date',
		'submit_date',
		'Task_completed',
        'status',
        'Scores',
        'Reviews',
        'Task_nos']
class ProfileSerializers(serializers.HyperlinkedModelSerializer):

	class Meta:
		model = profile
		fields = '__all__'


class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ['name', 'cover']



		#  
		# 	'url',
		# 	'pk',
		# 	'EachUser',
		# 	'firstName',
		# 	'lastName',
		# 	'phoneNos',
		# 	'registered_Course',
		# 	'address',
		# 
    