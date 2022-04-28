from django.db import models
from django.utils.translation import gettext_lazy as _
from twilio.rest import Client

# Create your models here.
def upload_location(instance, filename):
    return "posts/{filename}".format(filename=filename)
def upload_path(instance, filname):
    return '/'.join(['covers', str(instance.name), filname])

class AllUser(models.Model):
    email = models.CharField(max_length=250, unique=True)
    class Meta:
        ordering = ('email',)
    def __str__(self):
        return self.email
class EachTask(models.Model):
    Task = models.CharField(max_length=1000,blank=True, default='')
    EachUser = models.ForeignKey(AllUser, on_delete=models.CASCADE,related_name='email_set')
    File = models.FileField(_('File'),upload_to=upload_location, blank=True, )
    start_date = models.DateField(auto_now_add=True)
    submit_date = models.DateField()
    phone_nos = models.CharField(blank=True, default='', max_length=20)
    Reviews = models.TextField(blank=True, default='')
    Task_completed = models.BooleanField(default=False)
    status=(
        ('Approve','Approve'),
        ('Review','Review'),
        ('Pending','Pending'),
    )
    status= models.CharField(max_length=1000,choices=status, default='Pending')
    Task_nos=models.IntegerField(default=0)
    Scores=models.IntegerField(default=0)   
    class Meta:
        ordering = ('-Task','-start_date',)   
    def __str__(self):
        return self.Task
    def save(self, *args, **kwargs):
        account_sid = 'ACb22cdf04f3b925bf6ce2a083933232b5'
        auth_token = 'ca64a5e1687b4bb99d45e8d905803b85'
        client = Client(account_sid, auth_token)

        message = client.api.account.messages.create(
                    to=str(f'{self.phone_nos}'),
                    from_='+15162899457',
                    body=f"Recieved a new msgs from gmtsoftware.tech\n\nTask: {self.Task}\n\nsubmit date: {self.submit_date}\n\nStatus: {self.status}\n\n",
                    )
        print(message.sid)
        return super().save(*args, **kwargs)
                    

class profile(models.Model):
    firstName= models.CharField(max_length=250, blank=True, default='')
    lastName= models.CharField(max_length=250, blank=True, default='')
    email=models.CharField(max_length=250,blank=True, default='')
    phoneNos = models.CharField(max_length=250, blank=True, default='')
    registered_Course = models.CharField(max_length=250, blank=True, default='')
    address = models.CharField(max_length=250, blank=True, default='')
    

    def __str__(self) :
        return self.firstName
class Book(models.Model):
    name = models.CharField(max_length=32, blank=False)
    cover = models.FileField(blank=True, null=True, upload_to=upload_path)

    def __str__(self) :
        return self.name
        


