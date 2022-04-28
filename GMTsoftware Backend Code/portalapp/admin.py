from django.contrib import admin
from portalapp.models import EachTask,profile,AllUser,Book


admin.site.site_header = "GMTSOFTWARE STUDENT PORTAL "
admin.site.site_header = "STUDENT PORTAL ADMIN AREA"
admin.site.site_index_title = "WELCOME TO GMTSOFTWARE STUDENT PORTAL ADMIN"

# Register your models here.
admin.site.register(EachTask)
admin.site.register(profile)
admin.site.register(AllUser)
admin.site.register(Book)