# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: streamlit/proto/ForwardMsg.proto
# Protobuf Python Version: 5.26.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from streamlit.proto import AutoRerun_pb2 as streamlit_dot_proto_dot_AutoRerun__pb2
from streamlit.proto import Common_pb2 as streamlit_dot_proto_dot_Common__pb2
from streamlit.proto import Delta_pb2 as streamlit_dot_proto_dot_Delta__pb2
from streamlit.proto import GitInfo_pb2 as streamlit_dot_proto_dot_GitInfo__pb2
from streamlit.proto import Logo_pb2 as streamlit_dot_proto_dot_Logo__pb2
from streamlit.proto import Navigation_pb2 as streamlit_dot_proto_dot_Navigation__pb2
from streamlit.proto import NewSession_pb2 as streamlit_dot_proto_dot_NewSession__pb2
from streamlit.proto import PageConfig_pb2 as streamlit_dot_proto_dot_PageConfig__pb2
from streamlit.proto import PageInfo_pb2 as streamlit_dot_proto_dot_PageInfo__pb2
from streamlit.proto import PageProfile_pb2 as streamlit_dot_proto_dot_PageProfile__pb2
from streamlit.proto import PageNotFound_pb2 as streamlit_dot_proto_dot_PageNotFound__pb2
from streamlit.proto import PagesChanged_pb2 as streamlit_dot_proto_dot_PagesChanged__pb2
from streamlit.proto import ParentMessage_pb2 as streamlit_dot_proto_dot_ParentMessage__pb2
from streamlit.proto import SessionEvent_pb2 as streamlit_dot_proto_dot_SessionEvent__pb2
from streamlit.proto import SessionStatus_pb2 as streamlit_dot_proto_dot_SessionStatus__pb2
from streamlit.proto import AuthRedirect_pb2 as streamlit_dot_proto_dot_AuthRedirect__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n streamlit/proto/ForwardMsg.proto\x1a\x1fstreamlit/proto/AutoRerun.proto\x1a\x1cstreamlit/proto/Common.proto\x1a\x1bstreamlit/proto/Delta.proto\x1a\x1dstreamlit/proto/GitInfo.proto\x1a\x1astreamlit/proto/Logo.proto\x1a streamlit/proto/Navigation.proto\x1a streamlit/proto/NewSession.proto\x1a streamlit/proto/PageConfig.proto\x1a\x1estreamlit/proto/PageInfo.proto\x1a!streamlit/proto/PageProfile.proto\x1a\"streamlit/proto/PageNotFound.proto\x1a\"streamlit/proto/PagesChanged.proto\x1a#streamlit/proto/ParentMessage.proto\x1a\"streamlit/proto/SessionEvent.proto\x1a#streamlit/proto/SessionStatus.proto\x1a\"streamlit/proto/AuthRedirect.proto\"\xc7\x07\n\nForwardMsg\x12\x0c\n\x04hash\x18\x01 \x01(\t\x12%\n\x08metadata\x18\x02 \x01(\x0b\x32\x13.ForwardMsgMetadata\x12\"\n\x0bnew_session\x18\x04 \x01(\x0b\x32\x0b.NewSessionH\x00\x12\x17\n\x05\x64\x65lta\x18\x05 \x01(\x0b\x32\x06.DeltaH\x00\x12&\n\x11page_info_changed\x18\x0c \x01(\x0b\x32\t.PageInfoH\x00\x12*\n\x13page_config_changed\x18\r \x01(\x0b\x32\x0b.PageConfigH\x00\x12;\n\x0fscript_finished\x18\x06 \x01(\x0e\x32 .ForwardMsg.ScriptFinishedStatusH\x00\x12$\n\x10git_info_changed\x18\x0e \x01(\x0b\x32\x08.GitInfoH\x00\x12$\n\x0cpage_profile\x18\x12 \x01(\x0b\x32\x0c.PageProfileH\x00\x12\x30\n\x16session_status_changed\x18\t \x01(\x0b\x32\x0e.SessionStatusH\x00\x12&\n\rsession_event\x18\n \x01(\x0b\x32\r.SessionEventH\x00\x12!\n\nnavigation\x18\x17 \x01(\x0b\x32\x0b.NavigationH\x00\x12\'\n\x0epage_not_found\x18\x0f \x01(\x0b\x32\r.PageNotFoundH\x00\x12&\n\rpages_changed\x18\x10 \x01(\x0b\x32\r.PagesChangedH\x00\x12/\n\x12\x66ile_urls_response\x18\x13 \x01(\x0b\x32\x11.FileURLsResponseH\x00\x12 \n\nauto_rerun\x18\x15 \x01(\x0b\x32\n.AutoRerunH\x00\x12\x15\n\x04logo\x18\x16 \x01(\x0b\x32\x05.LogoH\x00\x12&\n\rauth_redirect\x18\x18 \x01(\x0b\x32\r.AuthRedirectH\x00\x12(\n\x0eparent_message\x18\x14 \x01(\x0b\x32\x0e.ParentMessageH\x00\x12\x12\n\x08ref_hash\x18\x0b \x01(\tH\x00\x12\x1d\n\x15\x64\x65\x62ug_last_backmsg_id\x18\x11 \x01(\t\"\x98\x01\n\x14ScriptFinishedStatus\x12\x19\n\x15\x46INISHED_SUCCESSFULLY\x10\x00\x12\x1f\n\x1b\x46INISHED_WITH_COMPILE_ERROR\x10\x01\x12\x1c\n\x18\x46INISHED_EARLY_FOR_RERUN\x10\x02\x12&\n\"FINISHED_FRAGMENT_RUN_SUCCESSFULLY\x10\x03\x42\x06\n\x04typeJ\x04\x08\x07\x10\x08J\x04\x08\x08\x10\t\"\x8e\x01\n\x12\x46orwardMsgMetadata\x12\x11\n\tcacheable\x18\x01 \x01(\x08\x12\x12\n\ndelta_path\x18\x02 \x03(\r\x12\x35\n\x16\x65lement_dimension_spec\x18\x03 \x01(\x0b\x32\x15.ElementDimensionSpec\x12\x1a\n\x12\x61\x63tive_script_hash\x18\x04 \x01(\t\"5\n\x14\x45lementDimensionSpec\x12\r\n\x05width\x18\x01 \x01(\r\x12\x0e\n\x06height\x18\x02 \x01(\r\"/\n\x0e\x46orwardMsgList\x12\x1d\n\x08messages\x18\x01 \x03(\x0b\x32\x0b.ForwardMsgB/\n\x1c\x63om.snowflake.apps.streamlitB\x0f\x46orwardMsgProtob\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'streamlit.proto.ForwardMsg_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\034com.snowflake.apps.streamlitB\017ForwardMsgProto'
  _globals['_FORWARDMSG']._serialized_start=575
  _globals['_FORWARDMSG']._serialized_end=1542
  _globals['_FORWARDMSG_SCRIPTFINISHEDSTATUS']._serialized_start=1370
  _globals['_FORWARDMSG_SCRIPTFINISHEDSTATUS']._serialized_end=1522
  _globals['_FORWARDMSGMETADATA']._serialized_start=1545
  _globals['_FORWARDMSGMETADATA']._serialized_end=1687
  _globals['_ELEMENTDIMENSIONSPEC']._serialized_start=1689
  _globals['_ELEMENTDIMENSIONSPEC']._serialized_end=1742
  _globals['_FORWARDMSGLIST']._serialized_start=1744
  _globals['_FORWARDMSGLIST']._serialized_end=1791
# @@protoc_insertion_point(module_scope)
