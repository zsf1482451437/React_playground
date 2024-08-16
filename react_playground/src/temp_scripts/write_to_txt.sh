#!/bin/bash

# 文件路径
INPUT_FILE="./index.jsx" # 替换为你的文件路径
OUTPUT_FILE="output.txt" # 输出文件路径

# 读取文件内容
FILE_CONTENT=$(<"$INPUT_FILE")

# 格式化字符串
FORMATTED_STRING="\`$FILE_CONTENT\`"

# 写入到输出文件
echo "$FORMATTED_STRING" > "$OUTPUT_FILE"

echo "File content has been written to $OUTPUT_FILE"
