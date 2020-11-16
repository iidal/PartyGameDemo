from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'/', views.PromptList.as_view()),
]