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
import collections.abc
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.internal.enum_type_wrapper
import google.protobuf.message
import streamlit.proto.LabelVisibilityMessage_pb2
import sys
import typing

if sys.version_info >= (3, 10):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing.final
class Slider(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    class _DataType:
        ValueType = typing.NewType("ValueType", builtins.int)
        V: typing_extensions.TypeAlias = ValueType

    class _DataTypeEnumTypeWrapper(google.protobuf.internal.enum_type_wrapper._EnumTypeWrapper[Slider._DataType.ValueType], builtins.type):
        DESCRIPTOR: google.protobuf.descriptor.EnumDescriptor
        INT: Slider._DataType.ValueType  # 0
        """What numeric type are we working with? This doesn't change how the
        data is stored, but the frontend needs to know for input parsing.
        """
        FLOAT: Slider._DataType.ValueType  # 1
        DATETIME: Slider._DataType.ValueType  # 2
        """Note: Represented as microseconds since epoch"""
        DATE: Slider._DataType.ValueType  # 3
        TIME: Slider._DataType.ValueType  # 4

    class DataType(_DataType, metaclass=_DataTypeEnumTypeWrapper): ...
    INT: Slider.DataType.ValueType  # 0
    """What numeric type are we working with? This doesn't change how the
    data is stored, but the frontend needs to know for input parsing.
    """
    FLOAT: Slider.DataType.ValueType  # 1
    DATETIME: Slider.DataType.ValueType  # 2
    """Note: Represented as microseconds since epoch"""
    DATE: Slider.DataType.ValueType  # 3
    TIME: Slider.DataType.ValueType  # 4

    class _Type:
        ValueType = typing.NewType("ValueType", builtins.int)
        V: typing_extensions.TypeAlias = ValueType

    class _TypeEnumTypeWrapper(google.protobuf.internal.enum_type_wrapper._EnumTypeWrapper[Slider._Type.ValueType], builtins.type):
        DESCRIPTOR: google.protobuf.descriptor.EnumDescriptor
        UNSPECIFIED: Slider._Type.ValueType  # 0
        SLIDER: Slider._Type.ValueType  # 1
        SELECT_SLIDER: Slider._Type.ValueType  # 2

    class Type(_Type, metaclass=_TypeEnumTypeWrapper): ...
    UNSPECIFIED: Slider.Type.ValueType  # 0
    SLIDER: Slider.Type.ValueType  # 1
    SELECT_SLIDER: Slider.Type.ValueType  # 2

    ID_FIELD_NUMBER: builtins.int
    FORM_ID_FIELD_NUMBER: builtins.int
    LABEL_FIELD_NUMBER: builtins.int
    FORMAT_FIELD_NUMBER: builtins.int
    DATA_TYPE_FIELD_NUMBER: builtins.int
    DEFAULT_FIELD_NUMBER: builtins.int
    MIN_FIELD_NUMBER: builtins.int
    MAX_FIELD_NUMBER: builtins.int
    STEP_FIELD_NUMBER: builtins.int
    VALUE_FIELD_NUMBER: builtins.int
    SET_VALUE_FIELD_NUMBER: builtins.int
    OPTIONS_FIELD_NUMBER: builtins.int
    HELP_FIELD_NUMBER: builtins.int
    DISABLED_FIELD_NUMBER: builtins.int
    LABEL_VISIBILITY_FIELD_NUMBER: builtins.int
    TYPE_FIELD_NUMBER: builtins.int
    id: builtins.str
    form_id: builtins.str
    label: builtins.str
    format: builtins.str
    data_type: global___Slider.DataType.ValueType
    min: builtins.float
    max: builtins.float
    step: builtins.float
    set_value: builtins.bool
    help: builtins.str
    disabled: builtins.bool
    type: global___Slider.Type.ValueType
    @property
    def default(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.float]: ...
    @property
    def value(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.float]: ...
    @property
    def options(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]: ...
    @property
    def label_visibility(self) -> streamlit.proto.LabelVisibilityMessage_pb2.LabelVisibilityMessage: ...
    def __init__(
        self,
        *,
        id: builtins.str = ...,
        form_id: builtins.str = ...,
        label: builtins.str = ...,
        format: builtins.str = ...,
        data_type: global___Slider.DataType.ValueType = ...,
        default: collections.abc.Iterable[builtins.float] | None = ...,
        min: builtins.float = ...,
        max: builtins.float = ...,
        step: builtins.float = ...,
        value: collections.abc.Iterable[builtins.float] | None = ...,
        set_value: builtins.bool = ...,
        options: collections.abc.Iterable[builtins.str] | None = ...,
        help: builtins.str = ...,
        disabled: builtins.bool = ...,
        label_visibility: streamlit.proto.LabelVisibilityMessage_pb2.LabelVisibilityMessage | None = ...,
        type: global___Slider.Type.ValueType = ...,
    ) -> None: ...
    def HasField(self, field_name: typing.Literal["label_visibility", b"label_visibility"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing.Literal["data_type", b"data_type", "default", b"default", "disabled", b"disabled", "form_id", b"form_id", "format", b"format", "help", b"help", "id", b"id", "label", b"label", "label_visibility", b"label_visibility", "max", b"max", "min", b"min", "options", b"options", "set_value", b"set_value", "step", b"step", "type", b"type", "value", b"value"]) -> None: ...

global___Slider = Slider
