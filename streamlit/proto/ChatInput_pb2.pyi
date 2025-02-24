"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
*!
Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2025)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

import builtins
import google.protobuf.descriptor
import google.protobuf.internal.enum_type_wrapper
import google.protobuf.message
import sys
import typing

if sys.version_info >= (3, 10):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing.final
class ChatInput(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    class _Position:
        ValueType = typing.NewType("ValueType", builtins.int)
        V: typing_extensions.TypeAlias = ValueType

    class _PositionEnumTypeWrapper(google.protobuf.internal.enum_type_wrapper._EnumTypeWrapper[ChatInput._Position.ValueType], builtins.type):
        DESCRIPTOR: google.protobuf.descriptor.EnumDescriptor
        BOTTOM: ChatInput._Position.ValueType  # 0

    class Position(_Position, metaclass=_PositionEnumTypeWrapper):
        """DEPRECATED: position property is deprecated and unused."""

    BOTTOM: ChatInput.Position.ValueType  # 0

    ID_FIELD_NUMBER: builtins.int
    PLACEHOLDER_FIELD_NUMBER: builtins.int
    MAX_CHARS_FIELD_NUMBER: builtins.int
    DISABLED_FIELD_NUMBER: builtins.int
    VALUE_FIELD_NUMBER: builtins.int
    SET_VALUE_FIELD_NUMBER: builtins.int
    DEFAULT_FIELD_NUMBER: builtins.int
    POSITION_FIELD_NUMBER: builtins.int
    id: builtins.str
    placeholder: builtins.str
    max_chars: builtins.int
    disabled: builtins.bool
    value: builtins.str
    set_value: builtins.bool
    default: builtins.str
    position: global___ChatInput.Position.ValueType
    def __init__(
        self,
        *,
        id: builtins.str = ...,
        placeholder: builtins.str = ...,
        max_chars: builtins.int = ...,
        disabled: builtins.bool = ...,
        value: builtins.str = ...,
        set_value: builtins.bool = ...,
        default: builtins.str = ...,
        position: global___ChatInput.Position.ValueType = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing.Literal["default", b"default", "disabled", b"disabled", "id", b"id", "max_chars", b"max_chars", "placeholder", b"placeholder", "position", b"position", "set_value", b"set_value", "value", b"value"]) -> None: ...

global___ChatInput = ChatInput
