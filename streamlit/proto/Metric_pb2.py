# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: streamlit/proto/Metric.proto
# Protobuf Python Version: 5.26.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from streamlit.proto import LabelVisibilityMessage_pb2 as streamlit_dot_proto_dot_LabelVisibilityMessage__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1cstreamlit/proto/Metric.proto\x1a,streamlit/proto/LabelVisibilityMessage.proto\"\xb6\x02\n\x06Metric\x12\r\n\x05label\x18\x01 \x01(\t\x12\x0c\n\x04\x62ody\x18\x02 \x01(\t\x12\r\n\x05\x64\x65lta\x18\x03 \x01(\t\x12*\n\tdirection\x18\x04 \x01(\x0e\x32\x17.Metric.MetricDirection\x12\"\n\x05\x63olor\x18\x05 \x01(\x0e\x32\x13.Metric.MetricColor\x12\x0c\n\x04help\x18\x06 \x01(\t\x12\x31\n\x10label_visibility\x18\x07 \x01(\x0b\x32\x17.LabelVisibilityMessage\x12\x13\n\x0bshow_border\x18\x08 \x01(\x08\"+\n\x0bMetricColor\x12\x07\n\x03RED\x10\x00\x12\t\n\x05GREEN\x10\x01\x12\x08\n\x04GRAY\x10\x02\"-\n\x0fMetricDirection\x12\x08\n\x04\x44OWN\x10\x00\x12\x06\n\x02UP\x10\x01\x12\x08\n\x04NONE\x10\x02\x42+\n\x1c\x63om.snowflake.apps.streamlitB\x0bMetricProtob\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'streamlit.proto.Metric_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\034com.snowflake.apps.streamlitB\013MetricProto'
  _globals['_METRIC']._serialized_start=79
  _globals['_METRIC']._serialized_end=389
  _globals['_METRIC_METRICCOLOR']._serialized_start=299
  _globals['_METRIC_METRICCOLOR']._serialized_end=342
  _globals['_METRIC_METRICDIRECTION']._serialized_start=344
  _globals['_METRIC_METRICDIRECTION']._serialized_end=389
# @@protoc_insertion_point(module_scope)
