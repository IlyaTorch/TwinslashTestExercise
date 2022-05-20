from rest_framework import serializers

from notes.models import Note


class NoteSerializer(serializers.ModelSerializer):
    """Serializer class for Note model"""

    class Meta:
        model = Note
        fields = '__all__'
