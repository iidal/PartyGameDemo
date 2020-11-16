from django.contrib import admin
from django.db import models

from gameprompts.models import Prompt

class PromptAdmin(admin.ModelAdmin):
    list_display = ('prompt_id','prompt_type','prompt',)
    search_fields = ['prompt','prompt_type', ]
    list_filter = ('prompt_type',)

admin.site.register(Prompt, PromptAdmin)