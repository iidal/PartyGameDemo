from rest_framework import serializers
from . import models

class PromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Prompt
        fields = ('prompt_id','prompt_type', 'prompt')