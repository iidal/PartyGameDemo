from rest_framework import generics
from . import serializers, models

class PromptList(generics.ListAPIView):
    serializer_class = serializers.PromptSerializer
    queryset = models.Prompt.objects.all()